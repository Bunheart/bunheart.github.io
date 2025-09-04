mainProcess();

async function mainProcess()
{
    projects = await loadProjectData();
    projects.forEach((project) => {generateCard(project);})
}

async function loadProjectData()
{
    try {
        const response = await fetch("data/projectsList.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        data = await response.json();
        return data;
    } catch (error) {
        console.warn(`Failed to load "data/projectsList.json", using fallback.`, error);
    }
}

async function generateCard(project)
{
    let container = document.getElementById("projects");

    let cardDiv = document.createElement("div");
    cardDiv.classList = "projectCard";
    if(project.headerImg != null)
    {
        let headerImg = document.createElement("img");
        headerImg.src = "img/projHeaders/" + project.headerImg;
        cardDiv.appendChild(headerImg);
    }
    let nameText = document.createElement("h3");
    nameText.innerHTML = project.name;
    cardDiv.appendChild(nameText);
    let projDesc = document.createElement("p");
    projDesc.innerHTML = project.desc;
    cardDiv.appendChild(projDesc);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList = "projectButtons";
    let repoButton = document.createElement("a");
    repoButton.classList = "repoButton";
    repoButton.innerHTML = "Repository";
    repoButton.href = "https://github.com/Bunheart/" + project.repoURL;
    repoButton.target = "_blank";
    buttonsDiv.appendChild(repoButton);

    if(project.webPage)
    {
        let webButton = document.createElement("a");
        webButton.classList = "webButton";
        webButton.innerHTML = "Go to";
        webButton.href = "https://bunheart.github.io/" + project.repoURL;
        webButton.target = "_blank";
        buttonsDiv.appendChild(webButton);
    }

    cardDiv.appendChild(buttonsDiv);
    container.appendChild(cardDiv);
}
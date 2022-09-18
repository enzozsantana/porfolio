function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone
    phone.href = `https://web.whatsapp.com/send?phone=55${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('')
}

function updateProjects(profileData) {
    const projects = document.getElementById('profile.projects')
        projects.innerHTML = profileData.projects.map((project) => {
            return `
                    <li>
                        <span class="title github">${project.name}</span>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                    </li>
                `
        }).join('')
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
        education.innerHTML = profileData.education.map((certificate) => {
            return `
                <li>
                    <span class="title">${certificate.name}</span>
                    <span class="insituition">${certificate.instituition}</span>
                    <a href="${certificate.url}" target="_blank">${certificate.url}</a>
                </li>
            `
        }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateEducation(profileData)
})()
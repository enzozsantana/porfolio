async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/enzozsantana/porfolio/main/data/profile.json';
    const fetching = fetch(url)
    return (await fetching).json()
}
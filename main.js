const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
    // fetch(url)
    //     .then(response => response.json())
    //     .then(json => displayPhones(json.data))
}

function displayPhones(phones) {
    //console.log(phones[0])
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ` `;
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
                    bis_skin_checked="1">
                    <a href="#" class=" ">
                        <img class="rounded-t-lg w-full p-4" src="${phone.image}" alt="">
                    </a>
                    <div class="p-5" bis_skin_checked="1">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${phone.phone_name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#"
                            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });

}

function search() {
    const searchField = document.getElementById('search-item').value;
    // const searchText = searchField.value;
    loadPhones(searchField);
};
//document.getElementById('search-btn').addEventListener('click', search());


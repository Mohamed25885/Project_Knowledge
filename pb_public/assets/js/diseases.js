

createDisease = async () => {
    const disease = await Promise.resolve(document.querySelector(`[name="disease"]`).value);
    const symptoms = await Promise.resolve(document.querySelectorAll(`input[type="checkbox"][name="symptoms"]:checked`));
    let symptoms_list = [];
    for (const symptom of symptoms) {
        symptoms_list.push(symptom.value);
    }

    console.log(symptoms_list);
    if (!disease || symptoms_list.length == 0) {
        return;
    }
    const record = await pb.collection('disease').create({
        "disease": disease,
        "symptoms": symptoms_list
    }).then(() => {
        location.reload();
    });
}







listDisease = async () => {

    const diseases = await pb.collection('disease').getFullList(500, {
        sort: '-created',
        expand: "symptoms"
    });

    return diseases;


}
deleteDisease = async (id) => {

    const value = confirm("Are you sure?");
    if (!value) return;
    await pb.collection('disease').delete(id).then(() => {

        location.reload();
    });



}

function createSymptomsDiseaseEls(symptoms) {
    const diseasesContainer = document.getElementById("symptoms_diseases_container");
    for (const symptom of symptoms) {
        const html = `
        <input class="form-check-input" name="symptoms" type="checkbox" value="${symptom.id}" id="${symptom.id}">
        <label class="form-check-label" for="${symptom.id}">
        ${symptom.name}
        </label>
      `;
        const div = document.createElement('div');
        div.classList.add('col-3')
        div.innerHTML = html;
        diseasesContainer.appendChild(div)
    }
}
function createDiseaseEls(diseases) {
    const diseasesContainer = document.getElementById("diseases_container");
    for (const disease of diseases) {
        let symptom_html = '';

        for (const symptom of disease.expand.symptoms) {
            symptom_html += `
        <div id="x${disease.id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${symptom.name}</div>
        </div>`;
        }

        const html = `
    <h2 class="accordion-header d-flex align-items-center justify-content-center">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#x${disease.id}" aria-expanded="false" aria-controls="x${disease.id}">
        ${disease.disease}
      </button>
      <li class="fa-trash fa text-danger text-right" onclick="deleteDisease('${disease.id}')" style="font-size: 20px;"></li>
    </h2>
    
    ${symptom_html}
  `;
        const div = document.createElement('div');
        div.classList.add('accordion-item')
        div.classList.add('mt-2')
        div.innerHTML = html;
        diseasesContainer.appendChild(div)
    }

}







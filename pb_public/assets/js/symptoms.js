

createSymptom = async () => {
    let symptom = await Promise.resolve(document.querySelector(`[name='symptom']`).value)

    console.log(symptom);
    if (!symptom) {
        return;
    }
    const record = await pb.collection('symptoms').create({
        "name": symptom
    }).then(() => {

        location.reload();
    });
}







listSymptom = async () => {

    const symptoms = await pb.collection('symptoms').getFullList(500, {
        sort: '-created',
    });
    return symptoms;


}
deleteSymptom = async (id) => {

    const value = confirm("Are you sure?");
    if (!value) return;
    await pb.collection('symptoms').delete(id).then(() => {

        location.reload();
    });



}

function createSymptomEls(symptoms){
    const symptomsContainer = document.getElementById("symptoms_container");
    for (const symptom of symptoms) {
        const html = `<div class="row bg-white border rounded" >
    <div class="col-10">${symptom.name}</div>
    <div class="col-2">
      <li class="fa-trash fa text-danger" onclick="deleteSymptom('${symptom.id}')"></li>
    </div>
  </div>`;
        const div = document.createElement('div');
        div.innerHTML = html;
        symptomsContainer.appendChild(div)
    }
}










createSymptom= async (symptom,asd)=> {
    const record = await pb.collection('symptoms').create({
        "name": symptom
    });
    return record;
}
 




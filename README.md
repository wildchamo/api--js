#Curso sobre el consumo de API REST de Platzi

Uso de fetch con promesas para llamar la información de una API REST

´´´
const api = "URL API REST"

fetch(api)
.then((res) => res.json())
.then((data) => {
    //aquí ya tienes la información de la data!
  console.log(data);
    //con esto ya puedes manipular el dom con la información que llega :D
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
})

´´´
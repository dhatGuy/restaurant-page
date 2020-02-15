const homeGen = () => {
  //   const content = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('id', 'home')
  homeContainer.setAttribute('data-tab-content', " ")

  const details = document.createElement('div')
  details.classList.add('details')

  const detailsHeading = document.createElement('div')
  detailsHeading.classList.add('heading-details')

  const h1 = document.createElement('h1')
  h1.textContent = `Odunsi's Restaurant`;

  const detailsContent = document.createElement('p')
  detailsContent.classList.add('details-content')
  detailsContent.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore
           architecto rem! Atque, enim commodi exercitationem corrupti iste illum
           temporibus eum rem! Corporis dolore assumenda perferendis harum
           aliquam officia incidunt, dignissimos quo, minus rem, quam consectetur
           debitis iste! Libero, autem?`

  homeContainer.appendChild(details)
  details.appendChild(detailsHeading)
  detailsHeading.appendChild(h1)
  details.appendChild(detailsContent)

  return homeContainer
}


export default homeGen;
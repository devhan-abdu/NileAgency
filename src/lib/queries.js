export const getProjectsQuery = `*[_type == "project"]{
    _id,
    clientName,
    slug,
    description,
    servicesProvided,
    timeline,
    challenge,
    solution,
    result,
    testimonial,
    "imageUrl": image.asset->url
  }`;

  export const getRecentProjectsQuery = `*[_type == "project"][0...4] {
    _id,
    clientName,
    slug,
    description,
    servicesProvided,
    timeline,
    challenge,
    solution,
    result,
    testimonial,
    "imageUrl": image.asset->url
}`;


export const getSingleProjectQuery = `*[_type == "project" && slug.current == $slug][0]{

  _id,
    clientName,
    slug,
    description,
    servicesProvided,
    timeline,
    challenge,
    solution,
    result,
    testimonial,
    "imageUrl": image.asset->url
  }`
export const testimonialQuery = `*[_type == "project"][0...6]{
    "ceoName": testimonial.ceoName,
      "companyName": testimonial.companyName,
      "imageUrl": testimonial.image.asset->url,
      "message": testimonial.message
  }`


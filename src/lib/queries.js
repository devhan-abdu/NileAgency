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

  
  export const getSingleProjectQuery =`*[_type == "project" && slug.current == $slug][0]{
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
  
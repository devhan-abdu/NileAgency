import { fetchProjects } from '@/lib/sanity'
import Portfolio from './Portfolio.jsx'

export default async function Page (){

  const projects = await fetchProjects()
  return <Portfolio projects={projects}/>
}


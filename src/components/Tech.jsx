import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 mb-6" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <p className="my-2 p-0 text-center text-white text-lg font-medium">{technology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");
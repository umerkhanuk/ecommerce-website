import Props from "../component/Props"

const about = (prop:{name:string,lname:string}) => {
  return (
    <div>
    <Props name="john" lname="mark"/>
    <Props name="alex" lname="mark"/>

    </div>
  )
}
export default about
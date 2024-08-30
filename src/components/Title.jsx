

const Title = ({text1, text2}) => {

  return (
    <div className="inline-flex gap-2 items-center mb-3">
        <p> <span className="text-green-700 font-normal">{text1}</span> <span className="text-gray-700 font-normal">{text2}</span></p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
  )
}

export default Title
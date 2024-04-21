

const Card = ({className, title, description}) => {
  return (
    <div class={`h-80 w-80 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-solid border-white rounded-3xl overflow-hidden text-center ${className}`}>
    <div class="flex flex-col justify-center gap-1 pt-3 ">
      <p class="text-2xl font-bold mb-6 mx-2">{title}</p>
      <p class="px-3  text-sm">
        {description}
      </p>
    </div>
  </div>
  )
}

export default Card

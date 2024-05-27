

const TeamCard = ({className, title, description, picture}) => {
    return (
      <div class={`h-96 w-96 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-solid border-white rounded-3xl overflow-hidden text-center ${className}`}>
      <div class="flex flex-col justify-center gap-1 pt-3 ">
        <div class="flex justify-center mb-3">
        <img class="h-36 w-36 rounded-full object-cover border-white border-solid border-2" src={picture}/>
        </div>  
        <p class="text-2xl font-bold mb-6 mx-2">{title}</p>
        <p class="px-5 text-l">
          {description}
        </p>
      </div>
    </div>
    )
  }
  
  export default TeamCard
  
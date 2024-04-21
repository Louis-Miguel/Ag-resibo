import React from 'react'
import Section from './Section'

const Overview = () => {
  return (
    <Section id="overview" crosses>
      <div className="container">
      <div className="relative">
        
          <div className="relative  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 z-1 flex items-center h-[39rem] mb-5 p-8 border  border-white rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Motivation</h4>
              <p className="body-2 mb-[3rem] text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum suscipit cupiditate molestiae totam mollitia reiciendis nihil illo cumque odit doloribus unde est amet necessitatibus ullam accusamus voluptate, distinctio rerum.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-white rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 lg:p-15">
              <h4 className="h4 mb-4">Problem</h4>
              <p className="body-2 mb-[3rem] text-zinc-100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis praesentium, hic quam, beatae in reprehenderit minus sed tempore reiciendis velit, doloribus id! Suscipit voluptatem quod, molestias atque voluptate alias pariatur.
              </p>
              <h4 className="h4 mb-4">Solution</h4>
              <p className="body-2 mb-[3rem] text-zinc-100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis praesentium, hic quam, beatae in reprehenderit minus sed tempore reiciendis velit, doloribus id! Suscipit voluptatem quod, molestias atque voluptate alias pariatur.
              </p>
            </div>
          </div>

          <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Research Questions</h4>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto consectetur accusantium odit molestiae ullam, maiores quae beatae ab. Quas hic nam praesentium commodi eos veniam maiores doloremque velit molestias.
              </p>
              <h4 className="h4 mb-4">Null Hypothesis</h4>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto consectetur accusantium odit molestiae ullam, maiores quae beatae ab. Quas hic nam praesentium commodi eos veniam maiores doloremque velit molestias.
              </p>
              <h4 className="h4 mb-4">Alternative Hypothesis</h4>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto consectetur accusantium odit molestiae ullam, maiores quae beatae ab. Quas hic nam praesentium commodi eos veniam maiores doloremque velit molestias.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Overview

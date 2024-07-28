import React from 'react'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between p-14 w-[90%]">
        <div className='w-full flex flex-col'>
            <h1>
                You can write your post here:
            </h1>

        </div>
        <div className="w-full flex flex-col">
            <h1>
                You can see all posts here:
            </h1>
            <div>
                <div>
                    <h1>Title 1</h1>
                    <p>Description 1</p>
                    <button>Read more</button>
                </div>
                <div>
                    <h1>Title 2</h1>
                    <p>Description 2</p>
                    <button>Read more</button>
                </div>
                <div>
                    <h1>Title 2</h1>
                    <p>Description 2</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main
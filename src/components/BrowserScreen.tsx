import type { JSX } from 'react';
import './styles/BrowserScreen.css';

interface BrowserScreenInterface {
  width : string, 
  height: string,
  search: string,
  content: JSX.Element
}

export default function BrowserScreen({width, height, search, content} : BrowserScreenInterface) {

  const style = {
    height: height,
    width: width
  }

  return (
    <div style={{...style}} className="deep-bg rounded-3xl border-1 border-gray-800 browser-screen">
      <div className="browserheader flex py-4 px-6 gap-6 items-center rounded-t-3xl border-b-1 border-gray-800">
        <div className="screen-dots flex gap-2">
              <div className="screen-dot bg-red-400"></div>
              <div className="screen-dot bg-yellow-400"></div>
              <div className="screen-dot bg-green-400"></div>
            </div>

        <div className="search text-xs text-gray-400 w-full py-2 px-4 rounded-l text-start">
          <p className='opacity-60'>
            {search}
          </p>
        </div>
      </div>

      <div className='p-6'>
        {content}
      </div>
      
    </div>
  )
}
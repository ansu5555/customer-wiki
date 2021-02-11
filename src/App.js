import { useState, useEffect, useRef } from 'react'
import Section from './components/Section'
import Nav from './components/Nav'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'

const colors = [
  { bgColor: '#292826', fgColor: '#f9d342' },
  { bgColor: '#f7f7f9', fgColor: '#d2302c' },
  { bgColor: '#fce77d', fgColor: '#f96167' },
  { bgColor: '#ccf381', fgColor: '#4831d4' },
  { bgColor: '#f0a07c', fgColor: '#4a274f' },
  { bgColor: '#3c1a5b', fgColor: '#fff748' },
  { bgColor: '#fbeaeb', fgColor: '#2f3c7e' },
  { bgColor: '#1d1b1b', fgColor: '#ec4d37' },
  { bgColor: '#ec8b5e', fgColor: '#141a46' },
  { bgColor: '#ffffff', fgColor: '#8aaae5' },
  { bgColor: '#ffe67c', fgColor: '#295f2d' },
  { bgColor: '#f4a950', fgColor: '#161b21' },
  { bgColor: '#4a171e', fgColor: '#ffdb58' },
  { bgColor: '#358597', fgColor: '#f4a896' },
  { bgColor: '#ee4e34', fgColor: '#fcedda' },
]

const getRandomIdx = () =>
  Math.floor(Math.random() * Math.floor(colors.length - 1))

function App() {
  let [colorIdx, setColorIdx] = useState(0)
  let [position, setPosition] = useState({ top: -100, left: -100 })
  let [transform, setTransform] = useState(false)
  let [show, setShow] = useState(true)
  let [scroll, setScroll] = useState(0)
  let [pagePosition, setPagePosition] = useState({
    page1: { top: 0, bottom: 100 },
    page2: { top: 101, bottom: 200 },
    page3: { top: 201, bottom: 300 },
  })

  let wrapperRef = useRef(null)
  let pageRef1 = useRef(null)
  let pageRef2 = useRef(null)
  let pageRef3 = useRef(null)

  useEffect(() => {
    const onScroll = (e) => {
      let scrollTop = e.target.documentElement.scrollTop
      let maxScroll =
        e.target.documentElement.scrollHeight -
        e.target.documentElement.clientHeight
      let num = (scrollTop / maxScroll) * 100
      setScroll(Math.round((num + Number.EPSILON) * 100) / 100)
      setPagePosition({
        page1: {
          top: pageRef1.current.getBoundingClientRect().top,
          bottom: pageRef1.current.getBoundingClientRect().bottom,
        },
        page2: {
          top: pageRef2.current.getBoundingClientRect().top,
          bottom: pageRef2.current.getBoundingClientRect().bottom,
        },
        page3: {
          top: pageRef3.current.getBoundingClientRect().top,
          bottom: pageRef3.current.getBoundingClientRect().bottom,
        },
      })
    }
    setPosition({ top: -100, left: -100 })
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scroll, pagePosition])

  const scrollOption = { behavior: 'smooth', block: 'start' }
  let color = colors[colorIdx]

  return (
    <div className='wrapper' ref={wrapperRef}>
      <div
        className={transform ? ' cursor transform-cursor' : 'cursor'}
        style={{
          top: position.top,
          left: position.left,
          backgroundColor: color.fgColor,
          display: show ? 'block' : 'none',
        }}
        onAnimationEnd={() => setTransform(false)}
      />

      <div
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        onMouseMove={(e) => setPosition({ top: e.pageY, left: e.pageX })}>
        <nav
          className='navbar-custom'
          style={{
            backgroundColor: color.bgColor,
            color: color.fgColor,
          }}>
          <span className='navbar-brand nav-links'>NAVBAR</span>
          <span className='space-creator'></span>
          <Nav
            link={() => pageRef1.current.scrollIntoView(scrollOption)}
            text='Page 1'
            color={color.fgColor}
            position={pagePosition.page1}
          />
          <span className='divider'>|</span>
          <Nav
            link={() => pageRef2.current.scrollIntoView(scrollOption)}
            text='Page 2'
            color={color.fgColor}
            position={pagePosition.page2}
          />
          <span className='divider'>|</span>
          <Nav
            link={() => pageRef3.current.scrollIntoView(scrollOption)}
            text='Page 3'
            color={color.fgColor}
            position={pagePosition.page3}
          />
        </nav>
        <div
          className='progress-bar'
          style={{ backgroundColor: color.fgColor, width: `${scroll}%` }}
        />
        <div
          onMouseDown={() => {
            setTransform(true)
            setColorIdx(getRandomIdx())
          }}>
          <div
            ref={pageRef1}
            className='page'
            style={{
              backgroundColor: color.bgColor,
            }}>
            <Section
              text='React has been designed from the start for gradual adoption, and
            you can use as little or as much React as you need. Whether you
            want to get a taste of React, add some interactivity to a simple
            HTML page, or start a complex React-powered app, the links in
            this section will help you get started.'
              img={img1}
              color={color}
            />
            <Section
              text='Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source
            toolkit, featuring Sass variables and mixins, responsive grid
            system, extensive prebuilt components, and powerful JavaScript
            plugins.'
              img={img2}
              color={color}
            />
          </div>

          <div
            ref={pageRef2}
            className='page'
            style={{
              backgroundColor: color.bgColor,
            }}>
            <Section
              text='Unsplash is a platform powered by an amazing community that has gifted
            hundreds of thousands of their own photos to fuel creativity around the world.
            So sign up for free, or don’t. Either way, you’ve got access to over a million
            photos under the Unsplash license—which makes them free to do-whatever-you-want with.'
              img={img3}
              color={color}
            />
            <Section
              text='Stack Overflow for Teams, our core SaaS collaboration product,
            is helping thousands of companies around the world as the transition to remote work,
            address business continuity challenges, and undergo digital transformation.'
              img={img4}
              color={color}
            />
          </div>

          <div
            ref={pageRef3}
            className='page'
            style={{
              backgroundColor: color.bgColor,
            }}>
            <Section
              text='We believe the best way to bring personality and performance to websites and
            products is through great design and technology. Our goal is to make that process
            simple, by offering an intuitive and robust collection of open source designer web
            fonts. By using our extensive catalog, you can share and integrate typography into any
            design project seamlessly—no matter where you are in the world.'
              img={img5}
              color={color}
            />
            <Section
              text='Our font catalog places typography front and center, inviting users to explore,
            sort, and test fonts for use in more than 135 languages. We showcase individual type
            designers and foundries, giving you valuable information about the people and their processes,
            as well as analytics on usage and demographics. Our series of thematic collections helps you
            discover new fonts that have been vetted and organized by our team of designers, engineers,
            and collaborators, and our default sort organizes fonts based on popularity, trends,
            and your geographic location. You can also create your own highly customized collections
            by filtering families, weights, and scripts, plus test color themes, and review sample copy.
            Collections can be shared, making it easy to collaborate on projects and ensure typography is
            optimized and streamlined throughout the design and engineering process.'
              img={img6}
              color={color}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

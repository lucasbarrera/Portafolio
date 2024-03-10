import { useState } from 'react'
import './App.css'
import Testimonio from './components/Testimonio'

function App() {

  return (
    <>
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre nosotros</h1>

      <Testimonio 
      nombre='Wang Shawn'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniero deSoftware'
      empresa='Amazon'
      testimonio='Es aterrador cambiar de carrera. Solo gané la confianza de que podía codificar trabajando a través de las cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como Ingeniero de Software. freeCodeCamp cambió mi vida.'
      />
      
      <Testimonio 
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='Ingeniera deSoftware'
      empresa='Spotify'
      testimonio='Siempre he luchado por aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
     
      <Testimonio 
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah'
      cargo='Ingeniera deSoftware'
      empresa='ChatDesk'
      testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble.'
      />
      </div>
    </div>
      
    </>
  )
}

export default App

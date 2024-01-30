import { useForm } from 'react-hook-form'
import './App.css'
import { Toaster, toast } from 'react-hot-toast';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    toast.success('Gracias por probar este formulario!')
  })

  console.log(errors, 'Estos son los errores')


  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4"><span style={{
          color: '#f72585'
        }}>Form</span> <span style={{
          color: '#c200fb'
        }}>Validation</span></h1>
        <hr className="border-t-2 border-gray-300 my-5 w-16 font-bold" />
        <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={onSubmit} >
          {/*Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="nombre" style={{
              color: '#283845'
            }}>
              NOMBRE:
            </label>
            <input
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre es requerido'
                }, minLength: {
                  value: 5,
                  message: 'Nombre debe tener al menos 3 caracteres'
                },
                pattern: {
                  value: /^[^\s@./{}[\]]+$/,
                  message: 'No se permiten caracteres especiales en este campo.'
                },
                maxLength: 20
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ingrese su nombre..."
            />
            {errors.nombre && <p className='text-red-500 text-sm font-bold'>{errors.nombre.message}</p>}
          </div>

          {/*Correo */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="correo" style={{
              color: '#283845'
            }}>
              CORREO:
            </label>
            <input
              {...register('correo', {
                required: {
                  value: true,
                  message: 'Correo es requerido'
                }, minLength: {
                  value: 5,
                  message: 'Correo debe tener al menos 5 caracteres'
                }, maxLength: 20, pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: 'Formato de email no valido'
                }
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ingrese su correo..."
            />
            {errors.correo && <p className='text-red-500 text-sm font-bold'>{errors.correo.message}</p>}
          </div>

          {/*Password */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password" style={{
              color: '#283845'
            }}>
              PASSWORD:
            </label>
            <input
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password es requerido'
                }, minLength: {
                  value: 5,
                  message: 'Password debe tener al menos 5 caracteres'
                }, pattern: {
                  value: /^[^\s@./{}[\]]+$/,
                  message: 'No se permiten caracteres especiales en este campo.'
                }, maxLength: 20
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Ingrese su password..."
            />
            {errors.password && <p className='text-red-500  text-sm font-bold'>{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline w-full mx-auto send-button"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

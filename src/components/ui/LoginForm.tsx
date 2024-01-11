import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import Wingson from '~/svg/Wingson.svg'

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md items-center flex flex-col">
        <Wingson className='w-[200px]' />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In to your account</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" className="space-y-6" method="POST">
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Password" type="password" />
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button className="w-full bg-indigo-600 text-white">Log in</Button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div>
                <Button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <span className="sr-only">Log in with Google</span>
                  
                  Log in With Google
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">
            <span className="mr-2">Need an account?</span>
              <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
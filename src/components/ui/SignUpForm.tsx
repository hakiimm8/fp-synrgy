import React from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <div className="mt-1">
              <Input autoComplete="email" id="email" name="email" placeholder="Email Address" required type="email" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">
              Full Name
            </label>
            <div className="mt-1">
              <Input
                autoComplete="name"
                id="full-name"
                name="full-name"
                placeholder="Full Name"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="mt-1">
              <Input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="dob">
              Date of Birth
            </label>
            <div className="mt-1">
              <Input id="dob" name="dob" required type="date" />
            </div>
          </div>
          <div>
            <Button className="w-full" variant="default">
              Create
            </Button>
          </div>
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
          <div className="mt-6">
            <Button className="w-full" variant="outline">
              <span className="ml-3">Register With Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SignupForm;

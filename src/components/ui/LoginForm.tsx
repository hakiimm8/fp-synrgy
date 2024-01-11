import React from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
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
              {/* You need to provide an appropriate icon component here */}
              <span className="ml-3">Register With Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

type ChromeIconProps = React.SVGProps<SVGSVGElement>

// eslint-disable-next-line unused-imports/no-unused-vars
const ChromeIcon: React.FC<ChromeIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
};

export default LoginForm;

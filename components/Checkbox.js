import React from 'react'

export default function Checkbox({ onClickCategory }) {
  return (
    <div className="mt-20">
      <div className="h-20 flex items-center">
        <div className="flex items-center justify-center space-x-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            onClick={onClickCategory}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Men`s clothing
          </label>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            onClick={onClickCategory}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Women`s Clothing
          </label>
        </div>
      </div>
    </div>
  )
}

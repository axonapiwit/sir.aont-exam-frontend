import React from "react";

export default function Footer() {
  return (
      <footer className="pb-4 w-full flex justify-center items-center bg-white shadow">
        <span className="text-sm text-gray-500">
          © 2022{" "}
          <a href="https://facebook.com/axonapiwit/" className="hover:underline">
            Apiwit™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
  );
}

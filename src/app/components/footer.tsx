export default function Footer(){
    return(
<footer className="bg-white py-10 px-4 sm:px-6 lg:px-8 font-[sans-serif] justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  justify-between">
          <div>
            <h3 className="text-black font-medium mb-4 text-sm">Tools</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Website Builder</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Design System</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Page Customizer</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Modal Generator</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Animation Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-medium mb-4 text-sm">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">UI Components</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Optimization Tools</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Design Templates</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Branding Options</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-medium mb-4 text-sm">Support</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Get in Touch</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Help Center</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Customer Support</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">Request Features</a></li>
              <li><a href="javascript:void(0)" className="text-gray-600 hover:text-black text-[13px]">User Reviews</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-sm text-gray-600">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}
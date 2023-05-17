import React from "react";
export default function Footer() {
  return (
    <div className="block bg-white">
      <div className="container mx-auto">
        <div className="mt-11 pt-14 pr-11 pb-10 pl-5 flex flex-wrap border-t">
          <div className="flex-[0_0_25%]">
            <h4 className="font-semibold">Về chúng tôi</h4>
            <ul className="block mb-5">
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </ul>
          </div>
          <div className="flex-[0_0_25%]">
            <h4 className="font-semibold">Chăm sóc khách hàng</h4>
            <ul className="block mb-5">
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </ul>
          </div>
          <div className="flex-[0_0_25%]">
            <h4 className="font-semibold">FAQ</h4>
            <ul className="block mb-5">
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </ul>
          </div>
          <div className="flex-[0_0_25%]">
            <h4 className="font-semibold">Đăng ký thành viên</h4>
            <div className="mt-24">
              <input
                className="block w-full h-10 border-0 border-r-0 border-b font-thin"
                type="email"
                placeholder="Địa chỉ email"
                required
              ></input>
              <button className="block w-full mt-4 text-white text-center border-0 h-11 uppercase text-[10px] bg-black">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="pt-5 pr-11 pb-10 pl-5 flex flex-wrap justify-between items-center">
          <div className="flex items-center">Logo</div>
          <div className="flex text-[14px] font-light">Copyright</div>
        </div>
        <div className="mt-7 mb-12 pt-12 border-t">
          <p className="text-[10pt] text-center mb-0 uppercase">
            CÔNG TY TNHH{" "}
          </p>
          <p className="text-[10pt] text-center mb-0 uppercase">địa chỉ</p>
          <p className="text-[10pt] text-center mb-0 uppercase">điện thoại</p>
          <p className="text-[10pt] text-center mb-0 uppercase">
            giấy cndkdn số
          </p>
          <p className="text-[10pt] text-center mb-0 uppercase">cấp</p>
        </div>
      </div>
    </div>
  );
}

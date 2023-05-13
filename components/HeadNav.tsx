export default function HeadNav() {
  const cateList = [
    { index: 1, title: "Trang chủ" },
    { index: 2, title: "Áo" },
    { index: 3, title: "Quần" },
    { index: 4, title: "Nón" },
    { index: 5, title: "Phụ kiện" },
    { index: 6, title: "Gấu bông" },
    { index: 7, title: "Gấu bông" },
  ];
  
  return (
    <div className={`grid grid-cols-${cateList?.length} gap-4 mx-auto`}>
      {cateList.map((data) => 
        <div key={data.index}>{data.title}</div>
      )}
    </div>
  );
}

export default function Home() {
  return (
      <>
        <div className={"flex flex-col items-center justify-center gap-4 mt-10"}>
            <div className={"bg-pink-700 w-36 aspect-square"} />
            <div className={"bg-pink-700 w-36 aspect-video"} />
            <div className={"bg-pink-700 w-36 aspect-[12/1]"} />
        </div>
      </>
  );
}

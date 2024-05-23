import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="flex flex-col space-y-4 p-4 max-w-[200px]">
      <Button>default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="primaryOutline">primary outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondary outline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">danger outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sideBar">sideBar</Button>
      <Button variant="sideBarOutline">sideBar outline</Button>
    </div>
  );
}

export default Page;

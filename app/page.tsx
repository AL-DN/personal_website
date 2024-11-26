import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Home() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profile</MenubarTrigger>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarTrigger>Gallery</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

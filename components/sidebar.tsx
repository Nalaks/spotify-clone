import {
  Box,
  List,
  ListItem,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";
import NavListItem from "./navListItem";

const navMenu = () => [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = () => [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      px="5px"
      color="gray"
    >
      <Box py="20px" height="100%">
        <Box width="120px" mb="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box mb="20px">
          <List spacing={2}>
            {navMenu().map((item) => (
              <NavListItem key={item.name} item={item} />
            ))}
          </List>
        </Box>
        <Box mt="20px">
          <List spacing={2}>
            {musicMenu().map((item) => (
              <NavListItem key={item.name} item={item} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" mt="10px" />
        <Box height="60.5%" overflowY="auto" py="20px">
          <List spacing={2}>
            {playlists.map((item) => (
              <ListItem key={item} px="20px" fontSize="16px">
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{item}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

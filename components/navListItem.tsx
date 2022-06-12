import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NextLink from "next/link";

const NavListItem = ({ item }) => {
  return (
    <ListItem key={item.name} px="20px" fontSize="16px">
      <LinkBox>
        <NextLink href={item.route} passHref>
          <LinkOverlay>
            <ListIcon as={item.icon} color="white" mr="20px" />
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default NavListItem;

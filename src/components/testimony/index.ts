import { Root } from './root';
import { Content } from './content';
import { Author } from './author';
import { Text } from './text';
import { Image } from './image';
import { Informations } from './informations';
import { Name } from './name';
import { Sub } from './sub';

const Testimony = {
  Root,
  Content,
  Author,
  Text,
  Image,
  AuthorInformations: Informations,
  Name,
  Sub,
};

export default Testimony;

import { v4 as uuidv4 } from 'uuid';

import {
  BrainXmlSettings,
  FileRoot,
  GeneratedDateTime,
  Guid,
  HomeThoughtGuid,
  ModificationDateTime,
  Name,
} from '../../TheBrain8';
import { getNowInTheBrainStringFormat } from '../../utils';

export class Source {
  public guid: Guid;
  public name: Name;
  public personalBrainVersion: number;
  public telepathyVersion: number;
  public fileRoot: FileRoot;
  public generatedDateTime: GeneratedDateTime;
  public homeThoughtGuid: HomeThoughtGuid;
  public brainXmlSettings: BrainXmlSettings;
  public modificationDateTime: ModificationDateTime;

  public constructor(props?: Source) {
    if (props) {
      this.guid = props.guid;
      this.name = props.name;
      this.personalBrainVersion = props.personalBrainVersion;
      this.telepathyVersion = props.telepathyVersion;
      this.fileRoot = props.fileRoot;
      this.generatedDateTime = props.generatedDateTime;
      this.homeThoughtGuid = props.homeThoughtGuid;
      this.brainXmlSettings = props.brainXmlSettings;
      this.modificationDateTime = props.modificationDateTime;
    }
  }

  static buildSourceForHomeThoughtIDWithName(
    homeThoughtGuid: Guid,
    brainName: string
  ) {
    const source = new Source();
    source.guid = uuidv4();
    source.name = brainName;
    source.homeThoughtGuid = homeThoughtGuid;
    source.generatedDateTime = getNowInTheBrainStringFormat();
    source.modificationDateTime = getNowInTheBrainStringFormat();
    source.personalBrainVersion = 8022;
    source.telepathyVersion = 10;

    return source;
  }
}

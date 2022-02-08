import {
  BrainXmlSettings,
  FileRoot,
  GeneratedDateTime,
  Guid,
  HomeThoughtGuid,
  ModificationDateTime,
  Name,
  PersonalBrainVersion,
  TelepathyVersion,
} from '../../TheBrain8';

export class Source {
  public guid: Guid;
  public name: Name;
  public personalBrainVersion: PersonalBrainVersion;
  public telepathyVersion: TelepathyVersion;
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
}

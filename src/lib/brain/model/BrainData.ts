import { Attachment } from './Attachment';
import { Attribute } from './Attribute';
import { AttributeData } from './AttributeData';
import { Entry } from './Entry';
import { Link } from './Link';
import { Source } from './Source';
import { Thought } from './Thought';
export class BrainData {
  public Source: Source;
  public Attributes: Attribute[];
  public Thoughts: Thought[];
  public Links: Link[];
  public AttributeDatas: AttributeData[];
  public Entries: Entry[];
  public Attachments: Attachment[];

  public constructor(props?: BrainData) {
    if (props) {
      this.Source = new Source(props.Source);
      this.Attributes = props.Attributes?.map((o) => new Attribute(o));
      this.Thoughts = props.Thoughts?.map((o) => new Thought(o));
      this.Links = props.Links?.map((o) => new Link(o));
      this.AttributeDatas = props.AttributeDatas?.map(
        (o) => new AttributeData(o)
      );
      this.Entries = props.Entries?.map((o) => new Entry(o));
      this.Attachments = props.Attachments?.map((o) => new Attachment(o));
    }
  }
}

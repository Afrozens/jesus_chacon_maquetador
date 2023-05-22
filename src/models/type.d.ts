interface Center {
  isCenter?: boolean;
}

interface TextType extends Center {
  line: string;
  lineTwo?: string;
}

interface ParagraphType extends Center {
  children: ReactNode;
}

interface Form {
  name: string;
  email: string;
  reason: string;
  description: string;
  condition: boolean;
}

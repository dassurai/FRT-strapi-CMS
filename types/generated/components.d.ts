import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdblock extends Struct.ComponentSchema {
  collectionName: 'components_shared_adblocks';
  info: {
    displayName: 'Adblock';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Message: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks;
    Question: Schema.Attribute.String;
  };
}

export interface SharedIconBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_boxes';
  info: {
    displayName: 'Icon Box';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    Description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    RichText: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Message: Schema.Attribute.String;
    MessageFrom: Schema.Attribute.String;
    translated: Schema.Attribute.String;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.button', true>;
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedTransport extends Struct.ComponentSchema {
  collectionName: 'components_shared_transports';
  info: {
    displayName: 'Transport';
    icon: 'plane';
  };
  attributes: {
    location: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-location-picker.location-picker',
        {
          info: true;
        }
      >;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.adblock': SharedAdblock;
      'shared.button': SharedButton;
      'shared.faq': SharedFaq;
      'shared.icon-box': SharedIconBox;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonial': SharedTestimonial;
      'shared.text-block': SharedTextBlock;
      'shared.transport': SharedTransport;
    }
  }
}

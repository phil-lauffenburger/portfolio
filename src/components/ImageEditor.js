import React from 'react';
import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';


export const ImageUploader = () => {

  return (
    <div style={{height: '100vh', paddingTop: '160px'}}>
      <ImageEditor
        style={{ position: 'relative' }}
        includeUI={{
          loadImage: {
            name: 'Floor Plan',
          },
            menu: ['resize', 'crop', 'flip', 'rotate'],
          menuBarPosition: 'bottom',
        }}
        usageStatistics={false}
      />
    </div>
  );
};

export default ImageUploader;

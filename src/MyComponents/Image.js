// import React from "react";
// import ImageUploader from "react-images-upload";
// import axios from "axios";
// import Form from 'antd';

// class Image extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: []
//     };
//     this.handleimage = this.handleimage.bind(this);
//   }
  
//       handleimage(picture) {
//           this.setState({
//               images: images[0],
//           });
//       }
  
//      handleSubmit (values) {
//       console.log('image', this.state.pictures, this.state.pictures.name)
//       let form_data = new FormData();
      
//       form_data.append('images', this.state.images);

//       axios
//      .post("http://127.0.0.1:8000/", form_data
   
     
//      )
//      .then(res => console.log(res))
//      .catch(err => console.log(err));
//     };
  
  



//     //   instance({
//     //       method: "post",
//     //       url: "http://127.0.0.1:8000/",
//     //       data: form_data,
//     //       headers: { "Content-Type": "multipart/form-data" },
//     //   }).then(this.props.history.push("/"));
//     // }
    
 

//   render() {
//     return (
//       <Form  onFinish={this.handleSubmit}>
//       <Form.Item>
//       <ImageUploader
//         withIcon={true}
//         buttonText="Choose images"
//         onChange={this.handleimage}
//         imgExtension={[".jpg", ".gif", ".png", ".gif"]}
//         maxFileSize={5242880}
//       />
//       </Form.Item>
//       </Form>
//     );
//   }
// }
// export default Image;
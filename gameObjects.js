AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
   
      posZ = posZ - 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);

    }
  },
});

//boxes
//Add the component code here

AFRAME.registerComponent("box", {
    init: function () {
        //starting x position
        posX = -90;
        //starting z-position
        posZ = 10;

        for (var i = 0; i < 5; i++) {
            //create wire-fence entity
            var box1 = document.createElement("a-entity");
            var box2 = document.createElement("a-entity");
            var box3 = document.createElement("a-entity");
            var box4 = document.createElement("a-entity");


            //set x, y and z position
            posX = posX + 6;
            posY = 2.5;
            posZ = posZ - 8;

          

            //set the id
            box1.setAttribute("id", "box1" + i);
            box2.setAttribute("id", "box2" + i);
            box3.setAttribute("id", "box3" + i);
            box4.setAttribute("id", "box4" + i);

            //set the position
            box1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
            box2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
            box3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
            box4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

            box1.setAttribute("geometry", {
              primitive: "box",
              height: 3,
              width: 3,
              depth: 3,
            });
            box2.setAttribute("geometry", {
              primitive: "box",
              height: 3,
              width: 3,
              depth: 3,
            });
            box3.setAttribute("geometry", {
              primitive: "box",
              height: 3,
              width: 3,
              depth: 3,
            });
            box4.setAttribute("geometry", {
              primitive: "box",
              height: 3,
              width: 3,
              depth: 3,
            });
      
            //set the model
            box1.setAttribute(
                "material", {src : 'images/boxtexture1.jpg'}  
            );

            box2.setAttribute(
                "material", { src: 'images/boxtexture1.jpg' }
            );

            box3.setAttribute(
                "material", { src: 'images/boxtexture1.jpg' }
            );

            box4.setAttribute(
                "material", { src: 'images/boxtexture1.jpg' }
            );

          

            //set the physics body
            box1.setAttribute("static-body", {});
            box2.setAttribute("static-body", {});
            box3.setAttribute("static-body", {});
            box4.setAttribute("static-body", {});

            var sceneEl = document.querySelector("#scene");
            //attach the entity to the scene
            sceneEl.appendChild(box1);
            sceneEl.appendChild(box2);
            sceneEl.appendChild(box3);
            sceneEl.appendChild(box4);

        }
    },
});
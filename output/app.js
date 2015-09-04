var list_1_Int32__NilInt32, list_1_Int32__ConsInt32, list_1_Double__NilDouble, list_1_Double__ConsDouble, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32, TupleInt32_Int32, TupleInt32_FSharpList_1_Int32_, String__Format$, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__ToList$Int32_Int32, Seq__OfList$Int32_Int32, Seq__FromFactory$Int32_Int32, Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__Enumerator$Int32_Int32, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Option__IsSome$Int32_Int32, Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_, Option__GetValue$Int32_Int32, Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$Double_Double, List__TryPickIndexedAux$Double__Double_Double_Double, List__TryPickIndexed$Double__Double_Double_Double, List__TryFindIndexed$Double_Double, List__ToArray$Double_Double, List__Tail$Int32_Int32, List__Sort$Double_Double, List__Reverse$Int32_Int32, List__Reduce$Double_Double, List__OfArray$Double_Double, List__Min$Double_Double, List__Length$Double_Double, List__IterateIndexed$Double_Double, List__Head$Int32_Int32, List__Get$Double_Double, List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32, List__FoldIndexedAux$Unit__Double_Unit__Double, List__FoldIndexedAux$Int32__Double_Int32_Double, List__FoldIndexedAux$Double__Double_Double_Double, List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_, List__FoldIndexed$Double__Unit_Double_Unit_, List__FoldIndexed$Double__Int32_Double_Int32, List__FoldIndexed$Double__Double_Double_Double, List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_, List__Fold$Double__Int32_Double_Int32, List__Fold$Double__Double_Double_Double, List__FindIndexed$Double_Double, List__Empty$Int32_Int32, List__Empty$Double_Double, List__CreateCons$Int32_Int32, List__CreateCons$Double_Double, Extensions__logFormat$, Eggs__get_PI$, Eggs__eggquation2MinInput$, Eggs__eggquation2MaxInput$, Eggs__eggquation2$, Eggs__eggquation1MaxOutput$, Eggs__eggquation1MaxInput$, Eggs__eggquation1$, Eggs__doIt$, Eggs__PI, DateTime__get_Now$, DateTime__createUnsafe$, CreateEnumerable_1_Int32___ctor$Int32, Array__ZeroCreate$Double_Double, Array__SortInPlaceWith$Double_Double, Array__SortInPlace$Double_Double, Array__Sort$Double_Double, Array__Length$Vector3_Vector3_, Array__Length$Double_Double, Array__Iterate$Vector3_Vector3_, Array__FoldIndexed$Unit__Vector3_Unit__Vector3_, Array__FoldBackIndexed$Double__list_1_Double_Double_list_1_Double_, Array__FoldBack$Double__list_1_Double_Double_list_1_Double_, Array__Fold$Vector3__Unit_Vector3__Unit_, Array__Copy$Double_Double, Array__BoxedLength$;
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Copy$Double_Double = (function(xs)
{
    return xs.slice(0);;
});
Array__Fold$Vector3__Unit_Vector3__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__Vector3_Unit__Vector3_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldBack$Double__list_1_Double_Double_list_1_Double_ = (function(f,xs,seed)
{
    return Array__FoldBackIndexed$Double__list_1_Double_Double_list_1_Double_((function(_arg1)
    {
      return (function(x)
      {
        return (function(acc)
        {
          return f(x)(acc);
        });
      });
    }), xs, seed);
});
Array__FoldBackIndexed$Double__list_1_Double_Double_list_1_Double_ = (function(f,xs,seed)
{
    var acc = seed;
    var size = Array__Length$Double_Double(xs);
    for (var i = 1; i <= size; i++)
    {
      acc = f((i - 1))(xs[(size - i)])(acc);
      null;
    };
    return acc;
});
Array__FoldIndexed$Unit__Vector3_Unit__Vector3_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$Vector3_Vector3_(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Iterate$Vector3_Vector3_ = (function(f,xs)
{
    var _664;
    return Array__Fold$Vector3__Unit_Vector3__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _664, xs);
});
Array__Length$Double_Double = (function(xs)
{
    return xs.length;;
});
Array__Length$Vector3_Vector3_ = (function(xs)
{
    return xs.length;;
});
Array__Sort$Double_Double = (function(xs)
{
    var ys = Array__Copy$Double_Double(xs);
    Array__SortInPlace$Double_Double(ys);
    return ys;
});
Array__SortInPlace$Double_Double = (function(xs)
{
    return Array__SortInPlaceWith$Double_Double((function(x)
    {
      return (function(y)
      {
        return (x < y ? -1 : (x == y ? 0 : 1));
      });
    }), xs);
});
Array__SortInPlaceWith$Double_Double = (function(f,xs)
{
    xs.sort(function($a,$b) { return f($a)($b); });;
});
Array__ZeroCreate$Double_Double = (function(size)
{
    return new Array(size);;
});
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
DateTime__createUnsafe$ = (function(value,kind)
{
    var date = value == null ? new Date() : new Date(value);
    if (isNaN(date)) { throw "The string was not recognized as a valid DateTime." }
    date.kind = kind;
    return date;
});
DateTime__get_Now$ = (function(unitVar0)
{
    return DateTime__createUnsafe$(null, 2);
});
Eggs__doIt$ = (function(unitVar0)
{
    ((window.console).log("starting"));
    Extensions__logFormat$("starting at {0:d} {0:t}!", [DateTime__get_Now$()]);
    var wnd = (window.window);
    var width = (function(_unitVar0)
    {
      return ((wnd.innerWidth) - 50.000000);
    });
    var height = (function(_unitVar0)
    {
      return ((wnd.innerHeight) - 50.000000);
    });
    var depth = 100.000000;
    var minDepth = 0.010000;
    var scene = (new THREE.Object3D());
    (scene.autoUpdate) = true;
    null;
    var _43;
    var _46;
    var camera = (new THREE.PerspectiveCamera(75.000000, (width(_43) / height(_46)), minDepth, depth));
    (camera.matrixAutoUpdate) = true;
    null;
    (camera.rotationAutoUpdate) = true;
    null;
    ((camera.position).z) = 2.000000;
    null;
    var rendererProps = ({});
    (rendererProps.antialias) = true;
    null;
    var renderer = (new THREE.WebGLRenderer(rendererProps));
    (renderer.setClearColor("#ffffff"));
    var _70;
    var _73;
    (renderer.setSize(width(_70), height(_73)));
    (renderer.autoUpdateObjects) = true;
    null;
    var ignored0 = ((((window.document).getElementsByTagName("body"))[0]).appendChild((renderer.domElement)));
    var onWindowResize = (function(e)
    {
      var _88;
      var _91;
      var _96;
      var _99;
      (camera.aspect) = (width(_88) / height(_91));
      null;
      (camera.updateProjectionMatrix());
      var _104;
      var _107;
      (renderer.setSize(width(_104), height(_107)));
      return null;
    });
    (window.addEventListener("resize", (function(delegateArg)
    {
      return onWindowResize(delegateArg);
    }), false));
    var geometry = (new THREE.BoxGeometry(1.000000, 1.000000, 1.000000));
    var matProps = ({});
    (matProps.color) = 6723959;
    null;
    (matProps.shininess) = 50.000000;
    null;
    var materialP = (new THREE.MeshPhongMaterial(matProps));
    var matPropsL = ({});
    (matPropsL.color) = 6750071;
    null;
    (matPropsL.wireframe) = true;
    null;
    var materialL = (new THREE.MeshLambertMaterial(matPropsL));
    var loader = (new THREE.EventDispatcher());
    var cube = (new THREE.Mesh(geometry, materialL));
    var directional = (new THREE.DirectionalLight(13369344, 1.000000));
    var _ignored0 = ((directional.position).set(-100.000000, 100.000000, 0.000000));
    (scene.add(directional));
    var whitePoint = (new THREE.PointLight(10066329, 1.000000, 0.000000));
    var __ignored0 = ((whitePoint.position).set(100.000000, 100.000000, 100.000000));
    (scene.add(whitePoint));
    var whiteAmbient = (new THREE.AmbientLight(2236962));
    (scene.add(whiteAmbient));
    var radius = 1.000000;
    var segments = 100;
    var rings = 100;
    var computeEggGeometry = (function(fy)
    {
      return (function(scaleFactor)
      {
        var sphereGeom = (new THREE.SphereGeometry(radius, segments, rings));
        var maxX = 0.000000;
        var yAtMaxX = 0.000000;
        var maxY = -999999999.000000;
        var minY = 999999999.000000;
        var inputSequence = Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(0, rings));
        var enumerator = Seq__OfList$Int32_Int32(inputSequence).GetEnumerator();
        try
        {
          while (enumerator.MoveNext())
          {
            var r = enumerator.get_Current();
            var _inputSequence = Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(0, segments));
            var _enumerator = Seq__OfList$Int32_Int32(_inputSequence).GetEnumerator();
            try
            {
              while (_enumerator.MoveNext())
              {
                var s = _enumerator.get_Current();
                var vertexIndex = ((r * (segments + 1)) + s);
                var u = (s / segments);
                var v = (r / rings);
                var phi = ((u * 2.000000) * Eggs__PI);
                var theta = (v * Eggs__PI);
                var y = ((sphereGeom.vertices)[vertexIndex].y);
                var fy_ = fy(y);
                var x = (((-fy_) * (Math.cos(phi))) * scaleFactor);
                var z = ((fy_ * (Math.sin(phi))) * scaleFactor);
                ((sphereGeom.vertices)[vertexIndex].x) = x;
                null;
                ((sphereGeom.vertices)[vertexIndex].z) = z;
                null;
                if ((s == 0)) 
                {
                  Extensions__logFormat$("Point, r, {0}, s, {1}, u, {2}, v, {3}, y, {4}, fy, {5}, x, {6}, z, {7}, phi, {8}, theta, {9}, myCos(phi), {10}, mySin(phi), {11}, mySin(theta)", [r, s, u, v, y, fy_, x, z, ((phi / Eggs__PI) * 180.000000), ((theta / Eggs__PI) * 180.000000), (Math.cos(phi)), (Math.sin(phi)), (Math.sin(theta))]);
                }
                else
                {
                  ;
                };
                if ((x > maxX)) 
                {
                  maxX = x;
                  null;
                  yAtMaxX = y;
                  null;
                }
                else
                {
                  ;
                };
                if ((y > maxY)) 
                {
                  maxY = y;
                  null;
                }
                else
                {
                  ;
                };
                if ((y < minY)) 
                {
                  minY = y;
                  null;
                }
                else
                {
                  ;
                };
              };
            }
            finally{
              if (false) 
              {
                _enumerator.Dispose();
              }
              else
              {
                ;
              };
            };
          };
        }
        finally{
          if (false) 
          {
            enumerator.Dispose();
          }
          else
          {
            ;
          };
        };
        Extensions__logFormat$("MaxX was {0} at {1}. MaxY was {2}. MinY was {3}", [maxX, yAtMaxX, maxY, minY]);
        (sphereGeom.computeFaceNormals());
        (sphereGeom.computeBoundingBox());
        (sphereGeom.computeBoundingSphere());
        Array__Iterate$Vector3_Vector3_((function(c)
        {
          if ((((c.z) == 0.000000) && ((c.x) >= 0.000000))) 
          {
            var error = (((c.x) * (c.x)) - ((((c.y) - 1.000000) * ((c.y) - 2.000000)) * ((c.y) - 3.000000)));
            if ((error != 0.000000)) 
            {
              return Extensions__logFormat$("Bad coord at x {0} y {1} z {2} (error {3})", [(c.x), (c.y), (c.z), error]);
            }
            else
            {
              ;
            };
          }
          else
          {
            ;
          };
        }), (sphereGeom.vertices));
        return sphereGeom;
      });
    });
    var addEgg = (function(fy)
    {
      return (function(scale)
      {
        return (function(material)
        {
          return (function(px)
          {
            return (function(py)
            {
              return (function(pz)
              {
                var egg = (new THREE.Mesh(computeEggGeometry(fy)(scale), material));
                (egg.matrixAutoUpdate) = true;
                null;
                (egg.rotationAutoUpdate) = true;
                null;
                ((egg.position).x) = px;
                null;
                ((egg.position).y) = py;
                null;
                ((egg.position).z) = pz;
                null;
                (scene.add(egg));
                return egg;
              });
            });
          });
        });
      });
    });
    var addUsingEggquation1 = (function(a)
    {
      return (function(b)
      {
        return (function(d)
        {
          return (function(m)
          {
            return (function(ox)
            {
              return (function(oy)
              {
                return (function(oz)
                {
                  return addEgg((function(y_)
                  {
                    return Eggs__eggquation1$(a, b, d, y_);
                  }))((1.000000 / Eggs__eggquation1MaxOutput$(a, b, d)))(m)(ox)(oy)(oz);
                });
              });
            });
          });
        });
      });
    });
    var addUsingEggquation2 = (function(a)
    {
      return (function(b)
      {
        return (function(c)
        {
          return (function(m)
          {
            return (function(ox)
            {
              return (function(oy)
              {
                return (function(oz)
                {
                  return addEgg((function(y_)
                  {
                    return Eggs__eggquation2$(a, b, c, y_);
                  }))(2.000000)(m)(ox)(oy)(oz);
                });
              });
            });
          });
        });
      });
    });
    var material = materialL;
    var e1 = (function(arg00)
    {
      var clo1 = addUsingEggquation1(arg00);
      return (function(arg10)
      {
        var clo2 = clo1(arg10);
        return (function(arg20)
        {
          var clo3 = clo2(arg20);
          return (function(arg30)
          {
            var clo4 = clo3(arg30);
            return (function(arg40)
            {
              var clo5 = clo4(arg40);
              return (function(arg50)
              {
                var clo6 = clo5(arg50);
                return (function(arg60)
                {
                  return clo6(arg60);
                });
              });
            });
          });
        });
      });
    })(4.000000)(3.000000)(1.000000)(material)(-1.200000)(1.200000)(-3.000000);
    var e2 = (function(arg00)
    {
      var clo1 = addUsingEggquation2(arg00);
      return (function(arg10)
      {
        var clo2 = clo1(arg10);
        return (function(arg20)
        {
          var clo3 = clo2(arg20);
          return (function(arg30)
          {
            var clo4 = clo3(arg30);
            return (function(arg40)
            {
              var clo5 = clo4(arg40);
              return (function(arg50)
              {
                var clo6 = clo5(arg50);
                return (function(arg60)
                {
                  return clo6(arg60);
                });
              });
            });
          });
        });
      });
    })(1.000000)(2.000000)(3.000000)(material)(1.200000)(-1.200000)(-3.000000);
    var rotate = (function(o)
    {
      return (function(rx)
      {
        return (function(ry)
        {
          return (function(rz)
          {
            ((o.rotation).x) = (((o.rotation).x) + rx);
            null;
            ((o.rotation).y) = (((o.rotation).y) + ry);
            null;
            ((o.rotation).z) = (((o.rotation).z) + rz);
            return null;
          });
        });
      });
    });
    var render;
    render = (function(dt)
    {
      var ___ignored0 = (window.requestAnimationFrame((function(delegateArg)
      {
        return render(delegateArg);
      })));
      (scene.autoUpdate) = true;
      null;
      (function(arg00)
      {
        var clo1 = rotate(arg00);
        return (function(arg10)
        {
          var clo2 = clo1(arg10);
          return (function(arg20)
          {
            var clo3 = clo2(arg20);
            return (function(arg30)
            {
              return clo3(arg30);
            });
          });
        });
      })(e1)(0.001232)(0.024332)(0.003124);
      (function(arg00)
      {
        var clo1 = rotate(arg00);
        return (function(arg10)
        {
          var clo2 = clo1(arg10);
          return (function(arg20)
          {
            var clo3 = clo2(arg20);
            return (function(arg30)
            {
              return clo3(arg30);
            });
          });
        });
      })(e2)(0.001232)(0.024332)(0.003124);
      return (renderer.render(scene, camera));
    });
    return render(0.000000);
});
Eggs__eggquation1$ = (function(a,b,d,y_)
{
    var yInputScale = Eggs__eggquation1MaxInput$(a, b, d);
    var y = (y_ * yInputScale);
    return (Math.sqrt((((b * b) * ((a * a) - (y * y))) / (((a * a) + ((2.000000 * d) * y)) + (d * d)))));
});
Eggs__eggquation1MaxInput$ = (function(a,b,d)
{
    return a;
});
Eggs__eggquation1MaxOutput$ = (function(a,b,d)
{
    return (Math.sqrt(((((a * a) * b) * b) / ((a * a) + (d * d)))));
});
Eggs__eggquation2$ = (function(a,b,c,y_)
{
    var yInputMin = Eggs__eggquation2MinInput$(a, b, c);
    var yInputMax = Eggs__eggquation2MaxInput$(a, b, c);
    var yInputRange = (yInputMax - yInputMin);
    var y = (yInputMin + (((y_ + 1.000000) / 2.000000) * yInputRange));
    if (((y > 2.000000) || (y < 1.000000))) 
    {
      Extensions__logFormat$("eggquation2ActualYInput out of range: {0} (from {1})", [y, y_]);
    }
    else
    {
      ;
    };
    var value = (Math.sqrt(((((y - a) * (y - b)) * (y - c)) * 0.500000)));
    return value;
});
Eggs__eggquation2MaxInput$ = (function(a,b,c)
{
    return List__Get$Double_Double(List__Sort$Double_Double(List__CreateCons$Double_Double(a, List__CreateCons$Double_Double(b, List__CreateCons$Double_Double(c, List__Empty$Double_Double())))), 1);
});
Eggs__eggquation2MinInput$ = (function(a,b,c)
{
    return List__Min$Double_Double(List__CreateCons$Double_Double(a, List__CreateCons$Double_Double(b, List__CreateCons$Double_Double(c, List__Empty$Double_Double()))));
});
Eggs__get_PI$ = (function()
{
    return 3.141593;
});
Extensions__logFormat$ = (function(str,args)
{
    if ((Array__BoxedLength$(args) > 0)) 
    {
      return console.log(String__Format$(str, args));
    }
    else
    {
      return console.log(str);
    };
});
List__CreateCons$Double_Double = (function(x,xs)
{
    return (new list_1_Double__ConsDouble(x, xs));
});
List__CreateCons$Int32_Int32 = (function(x,xs)
{
    return (new list_1_Int32__ConsInt32(x, xs));
});
List__Empty$Double_Double = (function()
{
    return (new list_1_Double__NilDouble());
});
List__Empty$Int32_Int32 = (function()
{
    return (new list_1_Int32__NilInt32());
});
List__FindIndexed$Double_Double = (function(f,xs)
{
    var matchValue = List__TryFindIndexed$Double_Double(f, xs);
    if ((matchValue.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Double_Double(matchValue);
      return x;
    }
    else
    {
      throw ("List did not contain any matching elements");
      return null;
    };
});
List__Fold$Double__Double_Double_Double = (function(f,seed,xs)
{
    return List__FoldIndexed$Double__Double_Double_Double((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Double__Int32_Double_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$Double__Int32_Double_Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$Double__Double_Double_Double = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Double__Double_Double_Double(f, 0, seed, xs);
});
List__FoldIndexed$Double__Int32_Double_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__Double_Int32_Double(f, 0, seed, xs);
});
List__FoldIndexed$Double__Unit_Double_Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__Double_Unit__Double(f, 0, seed, xs);
});
List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, 0, seed, xs);
});
List__FoldIndexedAux$Double__Double_Double_Double = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Double__Double_Double_Double(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Int32__Double_Int32_Double = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__Double_Int32_Double(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__Double_Unit__Double = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__Double_Unit__Double(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32 = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Get$Double_Double = (function(xs,n)
{
    return List__FindIndexed$Double_Double((function(i)
    {
      return (function(_arg1)
      {
        return (n == i);
      });
    }), xs);
});
List__Head$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__IterateIndexed$Double_Double = (function(f,xs)
{
    var _938;
    return List__FoldIndexed$Double__Unit_Double_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _938, xs);
});
List__Length$Double_Double = (function(xs)
{
    return List__Fold$Double__Int32_Double_Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__Min$Double_Double = (function(xs)
{
    return List__Reduce$Double_Double((function(e1)
    {
      return (function(e2)
      {
        if ((e2 < e1)) 
        {
          return e2;
        }
        else
        {
          return e1;
        };
      });
    }), xs);
});
List__OfArray$Double_Double = (function(xs)
{
    return Array__FoldBack$Double__list_1_Double_Double_list_1_Double_((function(x)
    {
      return (function(acc)
      {
        return (new list_1_Double__ConsDouble(x, acc));
      });
    }), xs, (new list_1_Double__NilDouble()));
});
List__Reduce$Double_Double = (function(f,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var t = _arg1.Item2;
      var h = _arg1.Item1;
      return List__Fold$Double__Double_Double_Double(f, h, t);
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Reverse$Int32_Int32 = (function(xs)
{
    return List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Int32__ConsInt32(x, acc));
      });
    }), (new list_1_Int32__NilInt32()), xs);
});
List__Sort$Double_Double = (function(xs)
{
    return List__OfArray$Double_Double(Array__Sort$Double_Double(List__ToArray$Double_Double(xs)));
});
List__Tail$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__ToArray$Double_Double = (function(xs)
{
    var size = List__Length$Double_Double(xs);
    var ys = Array__ZeroCreate$Double_Double(size);
    List__IterateIndexed$Double_Double((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
List__TryFindIndexed$Double_Double = (function(f,xs)
{
    return List__TryPickIndexed$Double__Double_Double_Double((function(i)
    {
      return (function(x)
      {
        if (f(i)(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
List__TryPickIndexed$Double__Double_Double_Double = (function(f,xs)
{
    return List__TryPickIndexedAux$Double__Double_Double_Double(f, 0, xs);
});
List__TryPickIndexedAux$Double__Double_Double_Double = (function(f,i,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      var result = f(i)(x);
      if ((result.Tag == 0.000000)) 
      {
        return List__TryPickIndexedAux$Double__Double_Double_Double(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Option__GetValue$Double_Double = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Seq__Enumerator$Int32_Int32 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _276;
        return __.factory(_276);
      })(impl, unitVar1);
    })};
});
Seq__OfList$Int32_Int32 = (function(xs)
{
    return Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$Int32_Int32(_arg1);
        var x = List__Head$Int32_Int32(_arg1);
        return {Tag: 1.000000, Value: (new TupleInt32_FSharpList_1_Int32_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__ToList$Int32_Int32 = (function(xs)
{
    return List__Reverse$Int32_Int32(Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$Int32_Int32(x, acc);
      });
    }), List__Empty$Int32_Int32(), xs));
});
Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc) && (function()
          {
            var _456;
            return next(_456);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _254;
            return next(_254);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
String__Format$ = (function(s,args)
{
    return s.replace(/\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g, function(match, number, alignment, format) {
        var rep = match;
        if (args[number] !== undefined) {
            rep = args[number];
            if (format !== undefined) {
                if (typeof rep === 'number') {            
                    switch (format.substring(0,1)) {
                        case "f": case "F": return format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                        case "g": case "G": return format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                        case "e": case "E": return format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                        case "p": case "P": return (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    }                
                }
                else if (rep instanceof Date) {
                    if (format.length === 1) {
                        switch (format) {
                            case "D": return rep.toDateString();
                            case "T": return rep.toLocaleTimeString();
                            case "d": return rep.toLocaleDateString();
                            case "t": return rep.toLocaleTimeString().replace(/:\d\d(?!:)/, '');
                        }        
                    }
                    return format.replace(/(\w)\1*/g, function (match2) {
                        var rep2 = match2;
                        switch (match2.substring(0,1)) {
                            case "y": rep2 = match2.length < 4 ? rep.getFullYear() % 100 : rep.getFullYear(); break;
                            case "h": rep2 = rep.getHours() > 12 ? rep.getHours() % 12 : rep.getHours();      break;
                            case "M": rep2 = rep.getMonth() + 1; break;
                            case "d": rep2 = rep.getDate();      break;
                            case "H": rep2 = rep.getHours();     break;
                            case "m": rep2 = rep.getMinutes();   break;
                            case "s": rep2 = rep.getSeconds();   break;
                        }
                        if (rep2 !== match2 && rep2 < 10 && match2.length > 1) { rep2 = "0" + rep2; }
                        return rep2;
                    })                
                }
            }
        }
        return rep;
    });
});
TupleInt32_FSharpList_1_Int32_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
list_1_Double__ConsDouble = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Double__NilDouble = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Int32__ConsInt32 = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Int32__NilInt32 = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
Eggs__PI = Eggs__get_PI$();
Eggs__doIt$()
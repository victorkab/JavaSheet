/**
 * Description: This part of the source code contains the code functions attached to JavaSheet
 * This plugin uses chaining, don't forget it if you develop on it
 * 
 * Copyright 2011 Victor Kabdebon
 * Author: Victor Kabdebon
 * Website: http://www.victorkabdebon.com
 * License: Mit
 * Version: 0.1
 * Date: Sun Dec 11 2011
 * 
 * Use:
 * At the moment the selector entered must be an id either from the container (and the sheet will be put inside that container) or directly a sheet
 */

(function( window, undefined ) {

     // Use the correct document accordingly with window argument (sandbox)
     var document = window.document,
     navigator = window.navigator,
     location = window.location;
     var JavaSheet=
	 (function(selec){
	      /**
	       * Constructor and variables
	       */
	      var JavaSheet=function(selector){
		  return new JavaSheet.fn.init(selector);
	      },
	      // Current sheet, TODO: Replace it by list ?
	      currentSheet=null,
	      // Cursor (x position in the current sheet)
	      sheetCursor=0,
	      // Target where to put the Sheet
	      tgt=null,
	      // map containing externally loaded resources
	      loadedResources={};
	      

	      /**
	       * "Real constructor"
	       */
	      JavaSheet.fn=JavaSheet.prototype={
		  constructor:JavaSheet,
		  init:function(selector){
		      // TODO : Empty selector accepted
		      
		      // If selector is an id
		      tgt=document.getElementById(selector);
		      
		  },
		  selector:"",
		  JavaSheet:"0.1"
	      };
	      
	      /**
	       * Private functions
	       * 
	       */
	      var XMLtoSVGObject=function(XMLObject){
		  /**
		   * Performs a deep copy of the XML passed in argument to the same SVG structure
		   * - Recursive
		   * 
		   */
		  var svgns = "http://www.w3.org/2000/svg";
		  var SVGObject=document.createElementNS(svgns,XMLObject.nodeName);
		  // Insert all attributes
		  var attrs=XMLObject.attributes;
		  for(var i=0;i<attrs.length;i++){
		      SVGObject.setAttribute(attrs[i].nodeName,attrs[i].nodeValue);
		  }
		  
		  // Recursively append nodes
		  var children=XMLObject.children;
		  for(var child_index=0;child_index<children.length;child_index++){
		      SVGObject.appendChild(XMLtoSVGObject(children[child_index]));
		  }
		  return SVGObject;
	      };
	      /**
	       * Here are the functions that can be used from the outside
	       */
	      JavaSheet.createSVG=JavaSheet.fn.createSVG=function(){
		  /**
		   * Create and empty SVG file
		   */
		  
		  var svgns = "http://www.w3.org/2000/svg";
		  // Creating container

		  currentSheet = document.createElementNS(svgns, 'svg');
		  currentSheet.setAttribute('width', '800');
		  currentSheet.setAttribute('height', '800');
		  currentSheet.setAttribute('version', '1.1');
		  
		  // Create staff
		  for(var i=0; i<5;i++){
		      var lineStaff=document.createElementNS(svgns,"line");
		      lineStaff.setAttribute('x1', 0);
		      lineStaff.setAttribute('y1', 20*i);
		      lineStaff.setAttribute('x1', parseInt(currentSheet.getAttribute("width")));
		      lineStaff.setAttribute('y2', 20*i);
		      lineStaff.setAttribute('stroke', 'black');
		      lineStaff.setAttribute('stroke-width', '2');
		      currentSheet.appendChild(lineStaff);
		  }

		  return this;
		  
		  
	      },
	      JavaSheet.createSheet=JavaSheet.fn.createSheet=function(sheetId){
		  /**
		   * Create the empty Sheet
		   * TODO : REplace/Delete ?
		   */
	      },
	      JavaSheet.writeSheet=JavaSheet.fn.writeSheet=function(){
		  /**
		   * Write the sheet to the document (otherwise it's kept in memory)
		   */
		  tgt.appendChild(currentSheet);
	      },
	      JavaSheet.loadResource=JavaSheet.fn.loadResource=function(resourceName){
		  /**
		   * Load distant resource (SVG), it has to be placed in the resource/ directory for now
		   * TODO: Not compatible for a lot of things: IE6/IE5, but no support for SVG anyway...
		   */
		  var xmlhttp=new XMLHttpRequest();
		  xmlhttp.open("GET","resources/"+ resourceName +".xml",false);
		  xmlhttp.send();
		  // Converting to SVG after loading
		  loadedResources[resourceName]=XMLtoSVGObject(xmlhttp.responseXML.firstChild);

		  return this;
	      },
	      JavaSheet.addElement=JavaSheet.fn.addElement=function(objectName){
		  /**
		   * Maybe it is going to be put as an internal/non exposed method
		   */
		  currentSheet.appendChild(loadedResources[objectName]);
		  return this;
	      },
	      JavaSheet.parseNotes=JavaSheet.fn.parseNotes=function(listNotes){
		  /**
		   * This function parses notes in order to be displayed on the sheet.
		   * For now the notation is going to be
		   * jsheet.parseNotes("ABCD{1/4}R{3}A_B_C")
		   * Whith letters from A-G being notes
		   * R being the rest
		   * {} being the length of the notes
		   * A_B are beamed notes
		   * sA/ssA or bA/bbA or nA are in the order: sharped notes/double sharped notes, flat notes double flat notes, and natural notes
		   * TODO
		   */
		  return this;
	      },
	      JavaSheet.test=JavaSheet.fn.test=function(text){
		  /**
		   * Just a test function, put anything you want
		   */
		  return this;
	      };

	      
	      // Putting this as constructor
	      JavaSheet.fn.init.prototype=JavaSheet.fn;
	      return JavaSheet(selec);
	  });
     
     /**
      * Creating shortcut for javasheet
      */
     if( !window.jsheet ){
	 window.jsheet=JavaSheet;
     }
     
 })(window);

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
	      currentSheet=null;
	      

	      /**
	       * "Real constructor"
	       */
	      JavaSheet.fn=JavaSheet.prototype={
		  constructor:JavaSheet,
		  init:function(selector){
		      
		      
		  },
		  selector:"",
		  JavaSheet:"0.1"
	      };
	      
	      /**
	       * Here are the functions!
	       */
	      JavaSheet.createSVG=JavaSheet.fn.createSVG=function(){
		  var svgns = "http://www.w3.org/2000/svg";
		  var svgGraph=document.createElementNS(svgns,"svg");
		  svgGraph.setAttributeNS(null,"xmlns",svgns);
		  svgGraph.setAttributeNS(null,"version","1.1");
		  // Give version too
		  var shape = document.createElementNS("null","circle");
		  shape.setAttributeNS(null,"cx",25);
		  shape.setAttributeNS(null,"cy",25);
		  shape.setAttributeNS(null,"r",40);
//		  shape.setAttributeNS(null,"ry",10);
		  shape.setAttributeNS(null,"fill","green");
		  svgGraph.appendChild(shape);
		  return svgGraph;
		  
		  
	      },
	      JavaSheet.createSheet=JavaSheet.fn.CreateSheet=function(sheetId){
		  
	      },
	      JavaSheet.test=JavaSheet.fn.test=function(text){
		  
	      };
	      
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

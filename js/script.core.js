;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.tableToggle();
			self.dropdown();
			self.addFormInfo.init();
			self.fileInput();
		},

		windowLoad: function(){

			var self = this;

			self.proggresBur();
			
		},


		/**
		**	table toggle
		**/

		tableToggle : function(){

		    $('.toggle_btn').on('click', function(){

		    	$(this).toggleClass('opened').closest('.toggle_btn_row').toggleClass("opened_box");
		    	$(this).closest('.toggle_btn_row').next('.toggle_row').children('td').children('.toggle_box').slideToggle();

		    });

		},



		/**
		**	Dropdown
		**/

		dropdown: function(){

			$('.custom_dropdown_btn').on('click',function(){
				$(this).closest('.custom_dropdown_box').toggleClass('opened');
			});

			$(document).on('click', function(e){

				if(!$(e.target).closest('.custom_dropdown_box').length){
					$('.custom_dropdown_box').removeClass('opened');
				}

			});

		},



		/**
		**	Proggres Bur
		**/

		proggresBur: function(){

			$('.proggres_bur').each(function(index, el){

				var percent = $(el).attr('data-val');

				$(el).find('.proggres_bur_val').text(percent+'%');
				$(el).find('.proggres_bur_inner').animate({'width':percent+'%'},500);
			});

		},


		/**
		**	Form button add clone input
		**/

		addFormInfo: {

			init: function(){

				var self = this;

				self.templateContactPerson = '<div class="added_fields remove_box"><div class="form_row"><div class="label_col_1"><label>ФИО контактого лица</label></div><div class="input_box5 p_rel"><input type="text"><button class="close_btn" type="button"><i class="ti-close"></i></button></div></div><div class="form_row"><div class="label_col_1"><label>Должность</label></div><div class="input_box5"><input type="text"></div></div><div class="form_row"><div class="label_col_1"><label>Телефон</label></div><div class="input_box5"><input type="tel"></div></div><div class="form_row"><div class="label_col_1"><label>E-mail</label></div><div class="input_box5"><input type="email"></div></div><div class="form_row"><div class="label_col_1"><label>Адрес</label></div><div class="input_box5"><input type="text"></div></div></div>';

                self.templateContactParameter ='<div class="form_row remove_box"><div class="label_col_1"><label>Параметр</label></div><div class="input_box6 align_center"><div class="input_box6_inner alignleft"><input type="text"></div><div class="input_box6_inner alignright"><label>Единица</label><input type="text"></div><div class="input_box6_inner"><label>Значение</label><input type="text"></div></div><button class="close_btn" type="button"><i class="ti-close"></i></button></div>';

                self.templateAddFile ='<div class="form_row remove_box"><h6 class="name_load_file">Название файла</h6><a href="javascript:;" class="close_btn type1"><i class="ti-close"></i></a><div class="align_justify"><div class="file_name_box"><input type="text" placeholder="Имя"></div> <button type="button" class="btn grey border">Загрузить исходный файл</button> <button type="button" class="btn grey border">Загрузить PDF файл</button></div></div>';

                self.templateAddFileFin ='<div class="form_row remove_box"><div class="form_box_fin_wr clearfix"><div class="form_box_fin_1"><div class="form_box_fin_in form_box_fin_error"><input type="text" class="input_light align_right" value=""/><span>%</span></div></div><div class="form_box_fin_2"><div class="form_box_fin_in form_line form_box_fin_error"><input type="text" class="input_light" value=""/><span class="btn_off_form"><span class="icon_del">-</span></span></div></div></div></div>';
                
                self.templates = [self.templateContactPerson, self.templateContactParameter, self.templateAddFile, self.templateAddFileFin];

                self.event();

			},

			event: function(){

				var self = this;

				$('.add_form_btn').on('click',function(){
					 
					var parent = $(this).closest('fieldset').find('.form_template'),
					 	tamplate = parent.attr('data-template');

					self.addFields(tamplate, parent);

				});

				$('body').on("click", '.close_btn', function(){

					var parent = $(this).closest('.remove_box'); 
					self.removeInfo(parent);
				});

				$('body').on("click", '.btn_off_form', function(){

					var parent = $(this).closest('.remove_box'); 
					self.removeInfo(parent);
				});
			},

			addFields: function(idTempl, parent){

				var self = this;

				parent.append(self.templates[idTempl-1]);

			},

			removeInfo: function(parent){

				var self = this;

				parent.animate({
					'opacity': 0
				},500,function(){
					parent.slideUp(500, function(){
						parent.remove();
					});
				});

			},

		},



		/**
		**	File input
		**/

		fileInput: function(){

			$('.files_btn').on('click', function(){

				var $this = $(this),
					input = $this.parent().find('input[type="file"]');

				input.trigger('click');
			
			});

			$('input[type="file"]').on('change',function(){

				var $this = $(this),
					nameFileBox = $this.parent().find('.name_file'),
					nameFile = $this.val();

				if(nameFile != ''){

					nameFileBox.text(nameFile).css('display', 'block');
					$this.parent().addClass('selected');
				}
				else{

					nameFileBox.text(nameFile).css('display', 'none');
					$this.parent().removeClass('selected');
						
				}
	
			});

			$('.clear_file').on('click', function(){

				var $this = $(this),
					nameFileBox = $this.parent().find('.name_file');

				$this.parent().removeClass('selected').find('input').val('');
				nameFileBox.text('').css('display', 'none');

			});
		
		},


	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);
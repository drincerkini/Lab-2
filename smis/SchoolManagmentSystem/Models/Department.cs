using System;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagmentSystem.Models
{
	public class Department
	{
		[Key]
		public int DepartmentID { get; set; }

        [Required]
        [StringLength(25, ErrorMessage = "Name cannot be longer than 25 characters")]
        public string Name { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }

        //relationships


    }
}


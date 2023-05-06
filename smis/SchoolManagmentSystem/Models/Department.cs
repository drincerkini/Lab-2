using System;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagmentSystem.Models
{
    public class Department
    {
        [Key]
        public int DepartmentID { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 2, ErrorMessage = "Name cannot be shorter than 2 characters or longer than 20 characters.")]
        public string Name { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }

        //relationships


    }
}


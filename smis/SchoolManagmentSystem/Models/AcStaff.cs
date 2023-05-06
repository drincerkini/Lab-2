using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolManagmentSystem.Models
{
    public class AcStaff
    {
        [Key]
        public int AcStaffID { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Name cannot be shorter than 3 characters or longer than 15 characters.")]
        public string Name { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Name cannot be shorter than 3 characters or longer than 15 characters.")]
        public string Surname { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        [DisplayName("Birth Date")]
        public DateTime BirthDate { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        [DisplayName("Hire Date")]
        public DateTime HireDate { get; set; }

        public string Address { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get { return Name + " " + Surname; }
        }
        public int DepartmentID { get; set; }
        [ForeignKey("DepartmentID")]
        public Department? Department { get; set; }
    }
}

